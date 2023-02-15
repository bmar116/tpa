"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const commandorigin_1 = require("bdsx/bds/commandorigin");
const Utils_1 = require("../lib/Utils");
const command_2 = require("bdsx/command");
const cmd = command_2.command.register("tpa", "Ask a player for permission to teleport to them.");
cmd.overload((param, origin, output) => {
    if (origin.getOriginType() !== commandorigin_1.CommandOriginType.Player)
        return output.error('Command only for players');
    const player = origin.getEntity();
    const xuid = player.getXuid();
    const target = param.target.newResults(origin);
    if (target.length > 1)
        return output.error('§l§cYou cannot teleport multiple players at once');
    if (Utils_1.TpRequest.get(xuid))
        return output.error('§l§cYou cannot run this command while you have an active tpa request');
    new Utils_1.TpRequest(player, target[0]);
	target[0].sendMessage(`§l§bYou have received a tpa request from "${player.getName()}". Use the command /tpaccept "${player.getName()}" to accept, or /tpreject "${player.getName()}" to reject it.`);
    output.success('§l§aTpa request sent');
}, {
    target: command_1.PlayerCommandSelector
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHBhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHBhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXlEO0FBQ3pELDBEQUEyRDtBQUUzRCx3Q0FBeUM7QUFDekMsMENBQXVDO0FBRXZDLE1BQU0sR0FBRyxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSx1REFBdUQsQ0FBQyxDQUFDO0FBRTdGLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ25DLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLGlDQUFpQixDQUFDLE1BQU07UUFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUU1RyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFrQixDQUFDO0lBQ2xELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQW1CLENBQUM7SUFDakUsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7UUFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztJQUN6RyxJQUFJLGlCQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO0lBRWhJLElBQUksaUJBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FDakIsMENBQTBDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsb0NBQW9DLE1BQU0sQ0FBQyxPQUFPLEVBQUUsZ0NBQWdDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQ3BMLENBQUM7SUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFFbkQsQ0FBQyxFQUFFO0lBQ0MsTUFBTSxFQUFFLCtCQUFxQjtDQUNoQyxDQUFDLENBQUMifQ==