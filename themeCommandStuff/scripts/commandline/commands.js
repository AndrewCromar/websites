class Command {
    constructor(id, title, isTheme){
        this.id = id;
        this.title = title;
        this.isTheme = isTheme;
    }
}

let commands = [];

function MakeCommand(title, isTheme){
    commands.add(new Command(commands.length, title, isTheme));
}

MakeCommand("testCommandOne", false);
MakeCommand("testCommandTwo", false);
MakeCommand("themeOne", true);