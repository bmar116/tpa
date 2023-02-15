"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TpRequest = void 0;
const launcher_1 = require("bdsx/launcher");
const tpRequests = new Map();
class TpRequest {
    constructor(origin, target, owner) {
        this.origin = origin.getXuid();
        this.target = target.getXuid();
        this.owner = (owner === null || owner === void 0 ? void 0 : owner.getXuid()) || origin.getXuid();
        if (tpRequests.has(this.owner))
            return;
        tpRequests.set(this.owner, this);
        setTimeout(() => {
            this.remove();
        }, 1000 * 30);
    }
    run() {
        const level = launcher_1.bedrockServer.level;
        const origin = level.getPlayerByXuid(this.origin);
        const target = level.getPlayerByXuid(this.target);
        if (origin === null && target === null)
            return;
        const pos = target.getPosition();
        const dimension = target.getDimensionId();
        origin.teleport(pos, dimension);
        this.remove();
    }
    remove() {
        if (tpRequests.has(this.owner))
            tpRequests.delete(this.owner);
    }
    static get(origin) {
        return tpRequests.get(origin);
    }
}
exports.TpRequest = TpRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0Q0FBOEM7QUFFOUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQXFCLENBQUM7QUFFaEQsTUFBYSxTQUFTO0lBS2xCLFlBQVksTUFBb0IsRUFBRSxNQUFvQixFQUFFLEtBQW9CO1FBQ3hFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTyxFQUFFLEtBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xELElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTztRQUV2QyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxHQUFHO1FBQ0MsTUFBTSxLQUFLLEdBQUcsd0JBQWEsQ0FBQyxLQUFLLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDbkQsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDbkQsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxJQUFJO1lBQUUsT0FBTztRQUUvQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBYztRQUNyQixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNKO0FBcENELDhCQW9DQyJ9