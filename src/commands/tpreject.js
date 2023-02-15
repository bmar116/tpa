"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const commandorigin_1 = require("bdsx/bds/commandorigin");
const Utils_1 = require("../lib/Utils");
const command_2 = require("bdsx/command");
const cmd = command_2.command.register("tpreject", "Denies a player's tpa request.");
cmd.overload((param, origin, output) => {
    if (origin.getOriginType() !== commandorigin_1.CommandOriginType.Player)
        return output.error('Command only for players');
    const player = origin.getEntity();
    const xuid = player.getXuid();
    const target = param.target.newResults(origin)[0];
    const req = Utils_1.TpRequest.get(target.getXuid());
    if (!req || req.target !== xuid)
        return output.error('§l§cYou do not have any tpa requests from this player');
    req.remove();
    output.success('§l§aTpa request rejected');
}, {
    target: command_1.PlayerCommandSelector
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHByZWplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cHJlamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUF5RDtBQUN6RCwwREFBMkQ7QUFFM0Qsd0NBQXlDO0FBQ3pDLDBDQUF1QztBQUV2QyxNQUFNLEdBQUcsR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsMkNBQTJDLENBQUMsQ0FBQztBQUV0RixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNuQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxpQ0FBaUIsQ0FBQyxNQUFNO1FBQUUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFFNUcsTUFBTSxNQUFNLEdBQWlCLE1BQU0sQ0FBQyxTQUFTLEVBQWtCLENBQUM7SUFDaEUsTUFBTSxJQUFJLEdBQVcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3RDLE1BQU0sTUFBTSxHQUFrQixLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEYsTUFBTSxHQUFHLEdBQWMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFFLENBQUM7SUFFeEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLElBQUk7UUFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztJQUUvRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDYixNQUFNLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDckQsQ0FBQyxFQUFFO0lBQ0MsTUFBTSxFQUFFLCtCQUFxQjtDQUNoQyxDQUFDLENBQUMifQ==