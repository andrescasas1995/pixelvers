export interface TimelineItemProps {
    title: string;
    subtitle: string;
    from: string;
    to: string;
    current?: boolean;
    skills: string[];
    description: string;
    index: number;
};