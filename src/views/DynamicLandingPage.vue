<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section
      class="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div class="container mx-auto text-center z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Dynamic World
        </h1>
        <p class="text-xl mb-8">
          Explore the possibilities with our innovative solutions
        </p>
        <Button size="lg" @click="scrollToFeatures">Discover More</Button>
      </div>
      <div class="absolute inset-0 pointer-events-none">
        <transition-group name="float" tag="div">
          <component
            v-for="(icon, index) in icons"
            :key="icon.type.toString() + index"
            :is="icon.type"
            :style="getIconStyle(index)"
            class="absolute transition-all duration-1000 ease-in-out"
            :size="48"
          />
        </transition-group>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-muted">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            v-for="feature in features"
            :key="feature.title"
            class="transition-all hover:shadow-lg"
          >
            <CardHeader>
              <component
                :is="feature.icon"
                class="w-12 h-12 mb-4 text-primary"
              />
              <CardTitle>{{ feature.title }}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{{ feature.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div class="flex flex-wrap justify-center gap-8">
          <Card
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="w-full md:w-1/3"
          >
            <CardHeader>
              <CardTitle>{{ testimonial.name }}</CardTitle>
              <CardDescription>{{ testimonial.company }}</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="italic">"{{ testimonial.quote }}"</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20 bg-primary text-primary-foreground">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p class="text-xl mb-8">Join us today and experience the difference!</p>
        <Button variant="secondary" size="lg">Sign Up Now</Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  RocketIcon,
  ZapIcon,
  LayoutIcon,
  BrushIcon,
  ShieldIcon,
  StarIcon,
  HeartIcon,
} from "lucide-vue-next";
import { useColorMode } from "@/composibles/useColorMode";

const { isColorful } = useColorMode();

const icons = [
  { type: RocketIcon },
  { type: ZapIcon },
  { type: StarIcon },
  { type: HeartIcon },
  { type: RocketIcon },
  { type: ZapIcon },
  { type: StarIcon },
  { type: HeartIcon },
];

// const iconStyles = ref(
//   icons.map(() => ({
//     top: "0px",
//     left: "0px",
//     transform: "translate(0px, 0px) rotate(0deg)",
//     opacity: 1,
//     color: "#000000",
//   }))
// );

const features = [
  {
    icon: LayoutIcon,
    title: "Responsive Design",
    description: "Our solutions adapt seamlessly to any device or screen size.",
  },
  {
    icon: BrushIcon,
    title: "Customizable Themes",
    description: "Tailor the look and feel to match your brand identity.",
  },
  {
    icon: ShieldIcon,
    title: "Enhanced Security",
    description:
      "Rest easy knowing your data is protected with state-of-the-art security.",
  },
];

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators",
    quote: "This product has revolutionized our workflow. Highly recommended!",
  },
  {
    name: "Jane Smith",
    company: "Creative Solutions",
    quote:
      "The customization options are endless. It's exactly what we needed.",
  },
  {
    name: "Mike Johnson",
    company: "Data Secure",
    quote:
      "Finally, a solution that doesn't compromise on security. Impressive!",
  },
];

const iconPositions = ref(
  icons.map(() => ({
    top: "0px",
    left: "0px",
    transform: "translate(0px, 0px) rotate(0deg)",
    opacity: 1,
  }))
);

const getIconStyle = (index: number) => {
  return {
    ...iconPositions.value[index],
    color: isColorful.value ? getPastelColor(index) : "currentColor",
  };
};

const updateIconPositions = () => {
  const time = Date.now() * 0.001;
  iconPositions.value = icons.map((_, index) => {
    const angle = (index / icons.length) * Math.PI * 2 + time;
    const x = Math.cos(angle) * 40 + 50;
    const y = Math.sin(angle) * 40 + 50;
    return {
      top: `${y}%`,
      left: `${x}%`,
      transform: `translate(-50%, -50%) rotate(${angle * 30}deg)`,
      opacity: 0.7 + Math.sin(time + index) * 0.3,
      // color: isColorful.value ? getPastelColor(index) : "currentColor",
    };
  });
};

const getPastelColor = (index: number) => {
  const hue = (index * 137.508) % 360; // Use golden angle approximation for distribution
  return `hsl(${hue}, 70%, 80%)`;
};

// const updateIconPositions = () => {
//   const screenHeight = window.innerHeight;
//   const screenWidth = window.innerWidth;
//   const scrollY = window.scrollY;

//   iconStyles.value = iconStyles.value.map((_, index) => {
//     // Calculate a base Y position in a wave pattern
//     const waveAmplitude = screenHeight / 3; // Amplitude of the wave
//     const waveFrequency = 2; // How many waves across the screen width
//     const yOffset =
//       Math.sin(
//         (scrollY / screenHeight + index / iconStyles.value.length) *
//           Math.PI *
//           waveFrequency
//       ) * waveAmplitude;

//     return {
//       top: `${50 + yOffset}px`,
//       left: `${(index / iconStyles.value.length) * 100}%`,
//       transform: `translate(-50%, -50%) rotate(${
//         scrollY + (index * 360) / iconStyles.value.length
//       }deg)`,
//       opacity:
//         0.5 +
//         0.5 *
//           Math.cos(
//             (scrollY / screenHeight + index / iconStyles.value.length) *
//               Math.PI *
//               waveFrequency
//           ),
//     };
//   });
// };

const handleScroll = () => {
  updateIconPositions();
};

const scrollToFeatures = () => {
  const featuresSection = document.getElementById("features");
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  updateIconPositions();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.colorful-mode {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.colorful-mode h1,
.colorful-mode h2 {
  color: #5d5b8d;
}

.colorful-mode p {
  color: #7b7d7d;
}

.colorful-mode .bg-muted {
  background-color: rgba(255, 255, 255, 0.7);
}
.float-enter-active,
.float-leave-active {
  transition: all 2s ease;
}
.float-enter-from,
.float-leave-to {
  opacity: 0;
  transform: translateY(30px) rotate(180deg);
}
</style>
