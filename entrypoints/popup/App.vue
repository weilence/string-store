<template>
  <Suspense>
    <NoteList />
    <template #fallback>
      <div class="flex justify-center items-center h-12">
        <v-progress-circular indeterminate />
      </div>
    </template>
  </Suspense>
</template>
