<template>
  <v-container class="pa-0">

    <!-- header element -->
    <v-card :image=storeApp.banner :min-height="150" class="rounded-0">
      <v-row>
        <v-col>
          <v-row>
            <v-col class="mx-3">
              <!-- <p class="text-body-1 font-weight-thin text-center">Profile</p> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center mx-3">
              <v-img class="rounded-circle" :src=storeApp.picture max-width=100></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <v-card color="transparent">
      <v-row>
        <v-col class="mx-3 pt-9 pb-3">
          <p class="text-body-1 font-weight-regular text-center">@{{ storeApp.name }}</p>
          <p class="text-body-1 font-weight-regular text-center">{{ storeApp.display_name }}</p>
          <p class="text-caption font-weight-thin text-center">{{ storeApp.website }}</p>
          <p class="text-caption font-weight-thin text-center">🔑 {{ formattedPublicKey }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="mx-3 pb-3">
          <p class="text-body-1 font-weight-regular text-center">{{ storeApp.about }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" class="pb-3">
          <p class="text-h6 font-weight-bold text-center">{{ storeApp.following.length }}</p>
          <p class="text-body-1 font-weight-thin text-center">Following</p>
        </v-col>
        <v-col cols="4" class="pb-3">
          <p class="text-h6 font-weight-bold text-center">{{ '🔍' }}</p>
          <p class="text-body-1 font-weight-thin text-center">Followers</p>
        </v-col>
        <v-col cols="4" class="pb-3">
          <p class="text-h6 font-weight-bold text-center">{{ storeApp.relays.length }}</p>
          <p class="text-body-1 font-weight-thin text-center">Relays</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="my-0 pt-0 pb-6">
          <v-tabs v-model="tab" color="primary">
            <v-tab v-for="item in items" :key="item" :value="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>

    </v-card>

    <!-- notes and other stuff -->
    <v-card class="post_card mb-6" variant="rounded-xl" prepend-icon="mdi-twitter" title="tony"
      v-for="event in storeApp.events">
      <!-- if note includes image -->
      <!-- <v-img class="mx-auto" height="300" lazy-src="https://picsum.photos/200" max-width="500"></v-img> -->

      <!-- note content, if not does not contain image -->
      <v-row>
        <v-col class="mx-3">
          <span class="text-h6 font-weight-light">&nbsp;{{
            event.content
          }}</span>
        </v-col>
      </v-row>

      <!-- like/comment/share/bookmark buttons -->
      <v-row class="pb-1">
        <v-col>
          <v-icon class="mx-3" icon="mdi-heart" color="red" size="x-large"></v-icon>
          <v-icon class="mr-3" icon="mdi-comment-multiple" size="x-large"></v-icon>
          <v-icon icon="mdi-share" size="x-large"></v-icon>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-icon class="mx-3" icon="mdi-bookmark" size="x-large"></v-icon>
        </v-col>
      </v-row>

      <!-- like/comment/share stats -->
      <v-row class="mt-0 pb-1">
        <v-col class="mx-3 pt-0">
          <span class="text-body-2 text-gray">0 likes | 0 comments | 0 shares</span>
        </v-col>
      </v-row>

      <!-- note created at -->
      <v-row class="mt-0 mb-3">
        <v-col class="mx-3 pt-0">
          <span class="text-body-2 text-gray">{{
            event.created_at
          }}</span>
        </v-col>
      </v-row>

      <template v-slot:prepend>
        <v-img class="rounded-circle" :src=storeApp.picture width="50"></v-img>
      </template>
      <template v-slot:append>
        <div class="justify-self-end">
          <v-icon class="me-1" icon="mdi-dots-horizontal" size="x-large"></v-icon>
        </div>
      </template>
    </v-card>
</v-container>
</template>

<script>
import { nip19 } from 'nostr-tools'
import { useAppStore } from '@/store/app';

export default {
  setup() {
    const storeApp = useAppStore();
    return {
      storeApp,
    }
  },
  data: () => ({
    tab: null,
    items: [
      'Notes', 'Notes & Replies', 'Media', 'Likes',
    ],
    publickey: '',
    formattedPublicKey: '',
  }),

  methods: {
    formatPublicKey(publickey) {
      return `${publickey.slice(0, 14)}:${publickey.slice(-14)}`;
    }
  },
  async mounted() {
    this.publickey = nip19.npubEncode(localStorage.getItem('publickey'));
    this.formattedPublicKey = this.formatPublicKey(this.publickey);
  }
}
</script>

<style scoped>
.post_card {
  background-color: #0e1219;
  border-radius: 20px;
}

.font_size_18 {
  font-size: 18px !important;
}

.font-spacing-sm {
  letter-spacing: 0px;
}

.bordered {
  border: 1px solid #2c304c;
}
</style>