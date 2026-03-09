import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30"
            >
              <span className="text-blue-300 text-sm">Premium Car Dealership</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-5xl md:text-7xl mb-6"
            >
              Drive Your
              <span className="block text-blue-400">Dream Car</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-slate-300 mb-8 max-w-lg"
            >
              Discover our exclusive collection of luxury and sports vehicles. Find the perfect car that matches your style and performance needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4 flex-wrap"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Browse Inventory
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Contact Us
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              <div>
                <div className="text-3xl mb-1">500+</div>
                <div className="text-slate-400 text-sm">Cars Available</div>
              </div>
              <div>
                <div className="text-3xl mb-1">50+</div>
                <div className="text-slate-400 text-sm">Luxury Brands</div>
              </div>
              <div>
                <div className="text-3xl mb-1">10K+</div>
                <div className="text-slate-400 text-sm">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Animated Car */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Car image with smooth animation */}
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3,
                type: "spring",
                stiffness: 50,
                damping: 20
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1618480483701-c31ac5590db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBzaWRlJTIwdmlld3xlbnwxfHx8fDE3NzI4MzI3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury Sports Car"
                  className="w-full h-auto max-w-2xl drop-shadow-2xl"
                />
                
                {/* Glow effect behind car */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-blue-500/30 blur-3xl -z-10"
                />
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-500/20 rounded-full"
            />
            <motion.div
              animate={{
                rotate: -360
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 left-20 w-24 h-24 border-2 border-blue-400/20 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
