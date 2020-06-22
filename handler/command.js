const { extname, resolve } = require("path");
const fs = require("fs-nextra");

module.exports = (client) => {
    const loadCommands = async (dir = "commands") => {

        const files = await fs.scan(resolve(dir), { filter: (stats, path) => stats.isFile() && extname(path) === ".js" })
            .catch(() => fs.ensureDir(dir).catch(err => console.error(err)));
        await Promise.all([...files.keys()].map(path => {
            delete require.cache[path];
            const command = require(path);
            client.commands.set(command.name, command);
            if (command.aliases) {
                command.aliases.forEach(alias => {
                    client.aliases.set(alias, command.name);
                });
            }
        }));
        console.log(`Successfully loaded ${client.commands.size} of ${files.size} commands.`);
    };
    loadCommands();
};