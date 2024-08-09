<script setup>
import { computed, ref } from "vue";
import Button from "primevue/button";
import Menubar from 'primevue/menubar';
import Badge from 'primevue/badge';

const accountBadges = ref(3);

const items = computed(() => [
    {
        label: 'Склад',
        icon: 'pi pi-home',
        to: '/'
    },
    {
        label: 'Боксы',
        icon: 'pi pi-box',
        to: '/boxes'
    },
    {
        label: 'Посылки',
        icon: 'pi pi-folder',
        to: '/parcels'
    },
    {
        label: 'Лицевой счет',
        icon: 'pi pi-receipt',
        badge: accountBadges.value,
        to: '/account'
    },
    {
        label: 'Личный кабинет',
        icon: 'pi pi-user',
        to: '/cabinet'
    },
    {
        label: 'Сообщения',
        icon: 'pi pi-envelope',
        to: '/messages'
    }
]);

</script>

<template>
  <Menubar :model="items" class="mt-5">
    <template #item="{ item, props, hasSubmenu, root }">
      <router-link :to="item.to" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
        <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
        <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
      </router-link>
    </template>
  </Menubar>
</template>

