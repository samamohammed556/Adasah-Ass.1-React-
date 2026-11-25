function HeroStatCard({ stat }) {
  const IconComponent = stat.icon;

  return (
    <div className="glass-card p-4 hover:scale-105 transition-transform duration-300 text-center flex flex-col items-center justify-center">
      <div className="text-2xl text-primary mb-1 flex items-center justify-center">
        <IconComponent />
      </div>
      <p className="text-2xl md:text-3xl font-bold gradient-text">
        <span dir={stat.value.includes("+") ? "ltr" : undefined} className="inline-block">
          {stat.value}
        </span>
      </p>
      <p className="text-text-muted text-sm">{stat.label}</p>
    </div>
  );
}

export default HeroStatCard;
