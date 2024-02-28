// useDynamicSVGImport.js
import { useEffect, useState } from "react";

function useDynamicSVGImport(name) {
    const [icon, setIcon] = useState();
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const importIcon = async () => {
            try {
                const newIcon = (
                    await import(
                        `!!@svgr/webpack?-svgo,+titleProp,+ref!../../../../assets/images/icons/${name}.svg`
                    )
                ).default;
                setIcon(newIcon);
            } catch (err) {
                console.error(err);
                setHasError(true);
            }
        };

        importIcon();
    }, [name]);

    return { SvgIcon: icon, hasError };
}

export default useDynamicSVGImport;
