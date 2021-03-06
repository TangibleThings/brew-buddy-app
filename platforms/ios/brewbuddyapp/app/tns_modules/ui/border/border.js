var contentView = require("ui/content-view");
var viewModule = require("ui/core/view");
var utils = require("utils/utils");
var types = require("utils/types");
var Border = (function (_super) {
    __extends(Border, _super);
    function Border() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Border.prototype, "cornerRadius", {
        get: function () {
            if (types.isNumber(this.borderRadius)) {
                return this.borderRadius;
            }
            return 0;
        },
        set: function (value) {
            this.borderRadius = value;
        },
        enumerable: true,
        configurable: true
    });
    Border.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var width = utils.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = utils.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = utils.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = utils.layout.getMeasureSpecMode(heightMeasureSpec);
        var density = utils.layout.getDisplayDensity();
        var borderWidth = 0;
        if (types.isNumber(this.borderWidth)) {
            borderWidth = this.borderWidth;
        }
        var borderSize = (2 * borderWidth) * density;
        var result = viewModule.View.measureChild(this, this.layoutView, utils.layout.makeMeasureSpec(width - borderSize, widthMode), utils.layout.makeMeasureSpec(height - borderSize, heightMode));
        var widthAndState = viewModule.View.resolveSizeAndState(result.measuredWidth + borderSize, width, widthMode, 0);
        var heightAndState = viewModule.View.resolveSizeAndState(result.measuredHeight + borderSize, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    Border.prototype.onLayout = function (left, top, right, bottom) {
        var density = utils.layout.getDisplayDensity();
        var borderWidth = 0;
        if (types.isNumber(this.borderWidth)) {
            borderWidth = this.borderWidth;
        }
        var borderSize = borderWidth * density;
        viewModule.View.layoutChild(this, this.layoutView, borderSize, borderSize, right - left - borderSize, bottom - top - borderSize);
    };
    Border = __decorate([
        Deprecated
    ], Border);
    return Border;
}(contentView.ContentView));
exports.Border = Border;
//# sourceMappingURL=border.js.map