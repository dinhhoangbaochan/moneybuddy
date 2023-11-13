<template>
  <div class="container mx-auto py-[6rem]">
    <h1 class="leading-2">Expense Tracker</h1>
    <div class="input-group">
      <div class="relative mt-2 rounded-md shadow-sm">
        <div class="columns-4">
          <div class="w-full">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Transaction Type</label>
            <div class="mt-2">
              <select name="" 
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                <option value="">Cash</option>
                <option value="">Bank Wire</option>
              </select>
            </div>
          </div>

          <div class="w-full">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Transaction Name</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="w-full">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Transaction Date</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="w-full">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Transaction Amount</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- List -->
    <ul role="list" class="divide-y divide-gray-100">
  <li class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">leslie.alexander@example.com</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
      <p class="mt-1 text-xs leading-5 text-gray-500">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
    </div>
  </li>
  <li class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">Michael Foster</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">michael.foster@example.com</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900">Co-Founder / CTO</p>
      <p class="mt-1 text-xs leading-5 text-gray-500">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
    </div>
  </li>
  <li class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">Dries Vincent</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">dries.vincent@example.com</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900">Business Relations</p>
      <div class="mt-1 flex items-center gap-x-1.5">
        <div class="flex-none rounded-full bg-emerald-500/20 p-1">
          <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
        </div>
        <p class="text-xs leading-5 text-gray-500">Online</p>
      </div>
    </div>
  </li>
  <li class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">Lindsay Walton</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">lindsay.walton@example.com</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900">Front-end Developer</p>
      <p class="mt-1 text-xs leading-5 text-gray-500">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
    </div>
  </li>
  <li class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">Courtney Henry</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">courtney.henry@example.com</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900">Designer</p>
      <p class="mt-1 text-xs leading-5 text-gray-500">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
    </div>
  </li>
  <li class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">Tom Cook</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">tom.cook@example.com</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900">Director of Product</p>
      <div class="mt-1 flex items-center gap-x-1.5">
        <div class="flex-none rounded-full bg-emerald-500/20 p-1">
          <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
        </div>
        <p class="text-xs leading-5 text-gray-500">Online</p>
      </div>
    </div>
  </li>
</ul>

  </div>
</template>

<script setup>
const client = useSupabaseClient()
const { data: people } = await useAsyncData('people', async () => client.from('people').select('*').order('created_at'), { transform: result => result.data }); 
console.log('heere: ', people);
</script>