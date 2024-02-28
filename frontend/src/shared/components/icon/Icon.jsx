// Icon.js
import clsx from "clsx";
import useDynamicSVGImport from "../../hooks/useDynamicSVGImport";

function Icon(iconProps) {
    const { type, fill, disabled, className } = iconProps;

    const size = iconProps.size || "icon-xs";

    const SVGType = fill ? "fill" : "stroke";

    const iconClasses = clsx([
        size,
        "si",
        SVGType,
        className,
        { "disabled-cion": disabled },
    ]);

    const { SvgIcon, hasError } = useDynamicSVGImport(type);

    if (hasError) {
        return <div>Error loading icon</div>; // Customize the error message
    }

    if (SvgIcon) {
        return <SvgIcon className={iconClasses} />;
    }

    return null;
}

export default Icon;
