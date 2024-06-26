class Command {
    constructor(id, title, details, isActive, isTheme, themeColors = []) {
        this.id = id;
        this.title = title;
        this.details = details;
        this.isActive = isActive;
        this.isTheme = isTheme;
        this.themeColors = themeColors;
        this.clicked = null;
        this.mouseEnter = null;
        this.mouseExit = null;
    }

    SetExecutions(clicked, mouseEnter, mouseExit){
        this.clicked = clicked;
        this.mouseEnter = mouseEnter;
        this.mouseExit = mouseExit;

        return this;
    }

    Clicked() { this.clicked && this.clicked(this); }
    MouseEnter() { this.mouseEnter && this.mouseEnter(this); }
    MouseExit() { this.mouseExit && this.mouseExit(this); }
}

let commands = [];

function MakeCommand(title, details, isActive, isTheme, themeColors = []){
    const newCommand = new Command(commands.length, title, details, isActive, isTheme, themeColors);
    commands.push(newCommand);
    return newCommand;
}

// MakeCommand("Theme", "Regular", true, true, ["red", "green", "yellow", "blue"]).SetExecutions(ThemeCommandClicked, ThemeCommandMouseEnter, ThemeCommandMouseExit);
// MakeCommand("Theme", "Light", false, true, ["red", "green", "yellow", "blue"]).SetExecutions(ThemeCommandClicked, ThemeCommandMouseEnter, ThemeCommandMouseExit);
// MakeCommand("Theme", "Dark", false, true, ["red", "green", "yellow", "blue"]).SetExecutions(ThemeCommandClicked, ThemeCommandMouseEnter, ThemeCommandMouseExit);