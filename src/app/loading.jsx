const Loading = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 flex items-center justify-center overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-300/20 blur-[140px] rounded-full" />

      {/* Loader Content */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Orbit Loader */}
        <div className="relative w-36 h-36">
          
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-[6px] border-cyan-100" />

          {/* Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-cyan-500 border-r-cyan-400 animate-spin" />

          {/* Inner Circle */}
          <div className="absolute inset-5 rounded-full bg-white shadow-xl flex items-center justify-center">
            
            <div className="w-5 h-5 bg-cyan-500 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Text */}
        <h2 className="mt-10 text-3xl font-bold text-gray-900">
          Preparing Your Journey
        </h2>

        <p className="text-gray-500 mt-3 text-lg">
          Loading destinations and travel experiences...
        </p>

        {/* Loading Bars */}
        <div className="flex gap-2 mt-8">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce" />
          <div className="w-3 h-3 rounded-full bg-cyan-500 animate-bounce delay-100" />
          <div className="w-3 h-3 rounded-full bg-cyan-600 animate-bounce delay-200" />
        </div>
      </div>
    </section>
  );
};

export default Loading;