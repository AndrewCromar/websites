function QueryCommands(keyWord) {
    let results = [];
    commands.forEach(command => {
        if(command.title.toLowerCase().includes(keyWord.toLowerCase())) {
            results.push(command);
        }
    });
    return results;
}