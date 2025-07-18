export class ThemeManager {
  private static instance: ThemeManager;
  private themeToggleButton: HTMLElement | null = null;
  
  private constructor() {}
  
  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }
  
  private getCurrentTheme(): string {
    return localStorage.getItem('theme') || 'dark';
  }
  
  private setTheme(theme: string): void {
    document.body.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
    this.updateToggleButton(theme);
  }
  
  private updateToggleButton(theme: string): void {
    if (this.themeToggleButton) {
      this.themeToggleButton.textContent = theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro';
    }
  }
  
  private handleThemeToggle = (): void => {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
  
  private bindToggleButton(): void {
    this.themeToggleButton = document.getElementById('theme-toggle');
    
    if (this.themeToggleButton) {
      // Remover listener previo para evitar duplicados
      this.themeToggleButton.removeEventListener('click', this.handleThemeToggle);
      this.themeToggleButton.addEventListener('click', this.handleThemeToggle);
    }
  }
  
  public init(): void {
    // Aplicar tema inicial inmediatamente
    const currentTheme = this.getCurrentTheme();
    this.setTheme(currentTheme);
    
    // Buscar y configurar el botón
    this.bindToggleButton();
    
    // Si el botón no existe aún, esperar un poco y volver a intentar
    if (!this.themeToggleButton) {
      setTimeout(() => this.bindToggleButton(), 100);
    }
  }
  
  public reinit(): void {
    this.bindToggleButton();
    const currentTheme = this.getCurrentTheme();
    this.updateToggleButton(currentTheme);
  }
}

// Función de utilidad para inicializar el tema
export const initTheme = (): void => {
  const themeManager = ThemeManager.getInstance();
  themeManager.init();
};

// Para re-inicializar en navegación SPA
export const reinitTheme = (): void => {
  const themeManager = ThemeManager.getInstance();
  themeManager.reinit();
};