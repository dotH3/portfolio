interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

const TimelineItem = ({
  year,
  title,
  company,
  description,
}: TimelineItemProps) => {
  return (
    <div className="flex animate-slide-in">
      <div className="flex flex-col items-center mr-4">
        <div className="w-px h-full bg-gray-500" />
        <div className="w-4 h-4 rounded-full bg-blue-400 border-4 border-gray-800" />
      </div>
      <div className="pb-8">
        <p className="text-sm text-gray-400 mb-2">{year}</p>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-lg mb-2">{company}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
