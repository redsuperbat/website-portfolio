<template>
  <div class="bg-white rounded-t-md h-full flex flex-col justify-end p-3">
    <Message
      v-for="message in messages"
      :belongs-to="message.belongsTo"
      :text="message.text"
      :sender-name="message.senderName"
      class="mb-1"
    />
    <LoadingWorm v-if="isTyping" class="mt-3" />
  </div>
</template>

<script lang="ts" setup>
import { Message as IMessage } from '../types/message';
import Message from './Message.vue';
import LoadingWorm from './LoadingWorm.vue';

defineProps<{
  messages: IMessage[];
  isTyping: boolean;
}>();
</script>
