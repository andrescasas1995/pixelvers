import { TimelineItem } from '../../../components';
import type { ExperienceProps } from './Experience.types';

export const Experience = ({ experiences }: { experiences: ExperienceProps[] }) => {
    return (
        <section id="experiencia" className="py-20 bg-dark pixel-grid">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-white text-pixel">Experiencia Profesional</h2>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, i) => (
                        <TimelineItem key={i} {...exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
