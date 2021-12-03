<template>
  <aside class="w-64 min-h-screen shadow-sm bg-gray-200">
    <nav>
      <ul class=" p-8 flex flex-col gap-y-16">
        <li>
          <NuxtLink to="/" class="flex flex-row text-a2blue">
            <solid-chart-bar-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Insights</p >
        </NuxtLink>
        </li>

         <li>
          <NuxtLink to="/" class="flex flex-row text-a2blue">
            <solid-shopping-bag-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Products</p >
        </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/" class="flex flex-row text-a2blue">
            <solid-cash-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Sales</p >
        </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/" class="flex flex-row text-a2blue">
            <solid-briefcase-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Payout</p >
        </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/" class="flex flex-row text-a2blue">
            <solid-users-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Account</p >
        </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/" class="flex flex-row text-a2blue">
            <solid-information-circle-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Help Center</p >
        </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/" class="flex flex-row text-a2blue">
            <solid-logout-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Logout</p >
        </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
