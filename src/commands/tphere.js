"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const commandorigin_1 = require("bdsx/bds/commandorigin");
const Utils_1 = require("../lib/Utils");
const command_2 = require("bdsx/command");
const cmd = command_2.command.register("tphere", "Ask a player for permission to teleport to them.");
cmd.overload((param, origin, output) => {
    if (origin.getOriginType() !== commandorigin_1.CommandOriginType.Player)
        return output.error('Command only for players');
    const player = origin.getEntity();
    const xuid = player.getXuid();
    const targets = param.target.newResults(origin);
    if (Utils_1.TpRequest.get(xuid))
        return output.error('§l§cYou cannot run this command while you have an active tpa request');
    targets.forEach((target) => {
        new Utils_1.TpRequest(target, player, player);
    });
    output.success('§l§aTphere request sent');
}, {
    target: command_1.PlayerCommandSelector
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHBoZXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHBoZXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXlEO0FBQ3pELDBEQUEyRDtBQUUzRCx3Q0FBeUM7QUFDekMsMENBQXVDO0FBRXZDLE1BQU0sR0FBRyxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSx1REFBdUQsQ0FBQyxDQUFDO0FBRWhHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ25DLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLGlDQUFpQixDQUFDLE1BQU07UUFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUU1RyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFrQixDQUFDO0lBQ2xELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQW1CLENBQUM7SUFDbEUsSUFBSSxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztJQUVoSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFO1FBQ3JDLElBQUksaUJBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3JELENBQUMsRUFBRTtJQUNDLE1BQU0sRUFBRSwrQkFBcUI7Q0FDaEMsQ0FBQyxDQUFDIn0=