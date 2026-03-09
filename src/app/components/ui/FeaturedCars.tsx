import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const featuredCars = [
  {
    id: 1,
    name: 'Mercedes AMG GT',
    category: 'Sports Car',
    price: 159999,
    image: 'https://images.unsplash.com/photo-1618480483701-c31ac5590db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBzaWRlJTIwdmlld3xlbnwxfHx8fDE3NzI4MzI3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: { hp: '523 HP', speed: '196 mph', acceleration: '3.6s' },
    rating: 4.9
  },
  {
    id: 2,
    name: 'Range Rover Sport',
    category: 'Luxury SUV',
    price: 89999,
    image: 'https://images.unsplash.com/photo-1758411898280-2dc7c95e0ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdXYlMjBjYXIlMjBkZWFsZXJzaGlwfGVufDF8fHx8MTc3Mjg5MzQyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: { hp: '395 HP', speed: '140 mph', acceleration: '5.9s' },
    rating: 4.8
  },
  {
    id: 3,
    name: 'Tesla Model S',
    category: 'Electric Sedan',
    price: 94999,
    image: 'https://images.unsplash.com/photo-1580959046674-8fc8f92b5fd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNlZGFuJTIwYXV0b21vYmlsZXxlbnwxfHx8fDE3NzI4OTM0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: { hp: '670 HP', speed: '175 mph', acceleration: '3.1s' },
    rating: 4.9
  }
];

export function FeaturedCars() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 text-sm uppercase tracking-wider mb-2 block">Premium Selection</span>
          <h2 className="text-4xl md:text-5xl mb-4">Featured Vehicles</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our handpicked collection of the finest vehicles available
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-slate-200">
                <div className="relative overflow-hidden group">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{car.rating}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-slate-100">
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl mb-1">{car.name}</h3>
                      <p className="text-slate-500">{car.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl text-blue-600">
                        ${car.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                    <div>
                      <div className="text-sm text-slate-500">Power</div>
                      <div className="text-sm">{car.specs.hp}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Top Speed</div>
                      <div className="text-sm">{car.specs.speed}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">0-60 mph</div>
                      <div className="text-sm">{car.specs.acceleration}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Inventory
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
