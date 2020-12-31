import djs, { Message } from 'discord.js';
import typescript from 'typescript';

import { Lang } from '../services';
import { MessageUtils } from '../utils';
import { Command } from './command';

let TsConfig = require('../../tsconfig.json');

export class InfoCommand implements Command {
    public name = 'info';
    public aliases = ['i', 'information'];
    public requireGuild = false;
    public requirePerms = [];

    public async execute(msg: Message, args: string[]): Promise<void> {
        let embed = Lang.getEmbed('info', 'en', {
            NODE_VERSION: process.version,
            TS_VERSION: `v${typescript.version}`,
            ES_VERSION: TsConfig.compilerOptions.target,
            DJS_VERSION: `v${djs.version}`,
        });
        await MessageUtils.send(msg.channel, embed);
    }
}
