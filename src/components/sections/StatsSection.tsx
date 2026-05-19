const StatsSection = () => {
  return (
    <section className="py-16 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-k-orange mb-2">200+</div>
            <div className="text-fg-mute">Families training at Kravist</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-k-orange mb-2">20+</div>
            <div className="text-fg-mute">Years of Krav Maga instruction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-k-orange mb-2">5+</div>
            <div className="text-fg-mute">Years serving Singapore families</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
