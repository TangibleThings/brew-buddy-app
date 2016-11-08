"use strict";
(function (Status) {
    Status[Status["NOT_STARTED"] = 1] = "NOT_STARTED";
    Status[Status["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    Status[Status["COMPLETED"] = 3] = "COMPLETED";
    Status[Status["CANCELED"] = 4] = "CANCELED";
})(exports.Status || (exports.Status = {}));
var Status = exports.Status;
;
//# sourceMappingURL=statusEnum.js.map