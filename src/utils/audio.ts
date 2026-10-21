// =======================================================================
// HYPE ENTERTAINMENT — EXPERIÊNCIA DE ÁUDIO AMBIENTE (WEB AUDIO API)
// =======================================================================
// Síntese de áudio procedural sem dependências externas ou arquivos pesados.
// Cria um clima cinematográfico sutil de palco/graves (drone/ambience)
// com fade-in e fade-out graduais respeitando a interação do usuário.
// =======================================================================

class AudioAtmosphere {
  private ctx: AudioContext | null = null
  private gainNode: GainNode | null = null
  private osc1: OscillatorNode | null = null
  private osc2: OscillatorNode | null = null
  private isPlaying: boolean = false

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop()
      return false
    } else {
      this.start()
      return true
    }
  }

  public getStatus(): boolean {
    return this.isPlaying
  }

  public start() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (!this.ctx) {
        this.ctx = new AudioCtx()
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume()
      }

      const now = this.ctx.currentTime

      // Master Gain
      this.gainNode = this.ctx.createGain()
      this.gainNode.gain.setValueAtTime(0.0001, now)
      // Fade in suave para não assustar o usuário
      this.gainNode.gain.exponentialRampToValueAtTime(0.08, now + 1.8)

      // Low pass filter para atmosfera aveludada e profunda
      const filter = this.ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(120, now)

      // Oscilador 1: Sub bass quente
      this.osc1 = this.ctx.createOscillator()
      this.osc1.type = 'sine'
      this.osc1.frequency.setValueAtTime(55, now) // Nota A1

      // Oscilador 2: Detuned 5th para textura harmônica de festival
      this.osc2 = this.ctx.createOscillator()
      this.osc2.type = 'sine'
      this.osc2.frequency.setValueAtTime(82.4, now) // Nota E2 com leve batimento
      this.osc2.detune.setValueAtTime(4, now)

      this.osc1.connect(filter)
      this.osc2.connect(filter)
      filter.connect(this.gainNode)
      this.gainNode.connect(this.ctx.destination)

      this.osc1.start(now)
      this.osc2.start(now)
      this.isPlaying = true
    } catch {
      // AudioContext não suportado ou bloqueado pelo navegador
      this.isPlaying = false
    }
  }

  public stop() {
    if (!this.ctx || !this.gainNode || !this.isPlaying) return

    try {
      const now = this.ctx.currentTime
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, now)
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.8)

      setTimeout(() => {
        try {
          this.osc1?.stop()
          this.osc2?.stop()
          this.osc1?.disconnect()
          this.osc2?.disconnect()
        } catch {
          // ignore
        }
        this.isPlaying = false
      }, 850)
    } catch {
      this.isPlaying = false
    }
  }
}

export const ambientAudio = new AudioAtmosphere()
