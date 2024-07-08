<!--NavigationHeader.vue-->
<template>
  <div class="fixed w-full top-0 left-0 z-50 bg-background/80 backdrop-blur-md">
    <div class="container mx-auto px-4">
      <Menubar class="border-none shadow-none">
        <MenubarMenu>
          <MenubarTrigger class="font-bold">Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <router-link to="/">Home</router-link>
            </MenubarItem>
            <MenubarItem>
              <router-link to="/about">About</router-link>
            </MenubarItem>
            <MenubarItem
              ><router-link to="/landing">Landing</router-link></MenubarItem
            >
          </MenubarContent>
        </MenubarMenu>
        <div class="ml-auto flex items-center">
          <Button variant="ghost" size="icon" @click="toggleColorMode">
            <palette-icon v-if="!isColorful" class="h-[1.2rem] w-[1.2rem]" />
            <droplet-icon v-else class="h-[1.2rem] w-[1.2rem]" />
            <span class="sr-only">Toggle color mode</span>
          </Button>
          <Button variant="ghost" size="icon" @click="toggleTheme">
            <sun-icon v-if="!isDark" class="h-[1.2rem] w-[1.2rem]" />
            <moon-icon v-else class="h-[1.2rem] w-[1.2rem]" />
            <span class="sr-only">Toggle theme</span>
          </Button>
        </div>
      </Menubar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, PaletteIcon, DropletIcon } from "lucide-vue-next";

import { useColorMode } from "@/composibles/useColorMode";

const isDark = ref(false);

const { isColorful, toggleColorMode } = useColorMode();

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
};
</script>
