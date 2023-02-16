// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    banner: '',
    website: '',
    nip05: '',
    picture: '',
    lud16: '',
    display_name: '',
    about: '',
    name: '',
    events: [],
    relays: [],
    following: [],
  }),
  actions: {
    updateUserData(userData) {
      this.banner = userData.banner;
      this.website = userData.website;
      this.nip05 = userData.nip05;
      this.picture = userData.picture;
      this.lud16 = userData.lud16;
      this.display_name = userData.display_name;
      this.about = userData.about;
      this.name = userData.name;
    },
    addEvent(event) {
      this.events.push(event)
    },
    updateFollowing(followingData) {
      this.following = followingData;
    },
    updateRelays(relayData) {
      this.relays = Object.entries(relayData);
    },
    updateBanner(bannerLink) {
      this.banner = bannerLink;
    },
    updateWebsite(websiteLink) {
      this.website = websiteLink;
    },
    updateNip05(nip05) {
      this.nip05 = nip05;
    },
    updatePicture(picture) {
      this.picture = picture;
    },
    updateLud16(lud16) {
      this.lud16 = lud16;
    },
    updateDisplayName(displayName) {
      this.display_name = displayName;
    },
    updateAbout(about) {
      this.about = about;
    },
    updateName(name) {
      this.name = name;
    },
  },
})
