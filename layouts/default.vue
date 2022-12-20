<template>
    <div>
        <!-- header section -->
        <header class="flex justify-center text-2xl bg-violet-900 text-white py-2">
            <Navbar class="flex gap-20" />
        </header>

        <!-- sidebar section -->
        <div class="flex">
            <sidebar >
                <Navbar class="flex flex-col gap-5 text-xl bg-slate-200 p-7 h-screen mr-7" />
            </sidebar>

            <slot></slot>
        </div>

        <!-- footer section -->
        <footer class="fixed bottom-0 w-screen bg-violet-900 text-white py-2 text-center">
            <p>@ 2022 created by Satyabrat Jha</p>
        </footer>
    </div>
</template>