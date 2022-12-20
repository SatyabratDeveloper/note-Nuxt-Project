<template>
    <!-- error page section -->
    <div class="flex flex-col gap-7 items-center mx-auto my-48 w-8/12 sm:w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12">
        <h1 class="text-4xl">
            <slot></slot>
        </h1>
        <!-- Home button -->
        <NuxtLink to="/" class=" bg-violet-900 text-white text-xl text-center border rounded-md p-3 w-48">Home</NuxtLink>
    </div>
</template>