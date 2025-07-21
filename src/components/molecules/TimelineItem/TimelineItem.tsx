import type { TimelineItemProps } from "./TimelineItem.types";

const hexToRgba = (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
};

export const TimelineItem = ({
    title,
    subtitle,
    from,
    to,
    current = false,
    skills,
    description,
    index,
}: TimelineItemProps) => {
    const colors = ['#009EE2', '#E5007E', '#FFEC00'];
    const colorStart = colors[index % colors.length];
    const colorEnd = colors[(index + 1) % colors.length];

    const bgColor = hexToRgba(colorStart, 0.2);
    const textColor = colorStart;

    return (
        <div
            className="timeline-item"
            style={{
                "--dot-color": colorStart,
                "--line-gradient": `linear-gradient(to bottom, ${colorStart}, ${colorEnd})`,
            } as React.CSSProperties}
        >
            <div className="bg-gray-medium p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-3xl font-bold text-pixel" style={{ color: "var(--dot-color)" }}>
                        {title}
                    </h3>
                    <div className="flex items-center mt-2 md:mt-0">
                        <span className="text-white font-medium">{`${from} - ${to}`}</span>
                        {current && (
                            <span
                                className="ml-3 px-3 py-1 text-xs rounded-full font-bold"
                                style={{ backgroundColor: bgColor, color: textColor }}
                            >
                                Actual
                            </span>
                        )}
                    </div>
                </div>
                <h4 className="text-lg text-white mb-3">{subtitle}</h4>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-dark text-xs rounded-full">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
