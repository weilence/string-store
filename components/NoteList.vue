<!-- eslint-disable no-console -->
<script lang="ts" setup>
import { ref, watch } from 'vue'

interface Note {
  title: string
  text: string
}

const initData = await storage.getItem<Note[]>('local:data')
const data = ref<Note[]>(initData || [])
watch(data, async (val) => {
  await storage.setItem('local:data', [...val])
}, { deep: true })

const addModel = ref({ title: '', text: '', show: false })
function add() {
  data.value.push({
    title: addModel.value.title,
    text: addModel.value.text,
  })
  addModel.value.title = ''
  addModel.value.text = ''
  addModel.value.show = false
}
function del(i: number) {
  data.value.splice(i, 1)
}
</script>

<template>
  <div class="p-2 space-y-2">
    <div>
      <v-btn v-if="!addModel.show" color="primary" prepend-icon="mdi-plus" @click="addModel.show = true">
        Add
      </v-btn>
    </div>
    <v-card v-if="addModel.show">
      <v-card-title>
        <v-text-field
          v-model="addModel.title"
          label="Title"
          hide-details
        />
      </v-card-title>
      <v-card-text>
        <v-textarea
          v-model="addModel.text"
          label="Text"
          hide-details
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="addModel.show = false">
          Cancel
        </v-btn>
        <v-btn color="info" @click="add">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-data-iterator :items="data" class="space-y-2">
      <template #default="{ items }">
        <v-card v-for="(item, i) in items" :key="item.raw.title" v-bind="item.raw">
          <v-card-actions>
            <v-spacer />
            <v-btn color="red" @click="del(i)">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-data-iterator>
  </div>
</template>

<style scoped>

</style>
