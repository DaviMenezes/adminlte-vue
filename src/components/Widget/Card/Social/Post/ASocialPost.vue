<template>
  <div class="card card-widget">
    <div class="card-header">
      <div class="user-block">
        <a-img-circle :src="user_img_local"/>
        <span class="username"><a :href="user_profile_url_local">{{user_name_local}}</a></span>
        <span class="description">{{user_desc_local}}</span>
      </div>
      <!-- /.user-block -->
      <div class="card-tools">
        <button type="button" @click="read_local = !read_local" class="btn btn-tool" data-toggle="tooltip" :title="readTitle">
          <i :class="readIcon"></i>
        </button>
        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
        <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
      </div>
      <!-- /.card-tools -->
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <img class="img-fluid pad" :src="img_local" v-if="img_local">
      <p v-html="content_local" v-if="content_local"></p>
      <div class="attachment-block clearfix" v-if="attachment">
        <a :href="attachment.url"><img class="attachment-img" :src="attachment.img" :alt="attachment.title"></a>
        <div class="attachment-pushed">
          <h4 class="attachment-heading"><a :href="attachment.url">{{attachment.title}}</a></h4>
          <div class="attachment-text">
            {{attachment.content}}<a href="#">more</a>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-default btn-sm"><i class="fas fa-share"></i> Share</button>
      <button type="button" class="btn btn-default btn-sm"><i class="far fa-thumbs-up"></i> Like</button>
      <span class="float-right text-muted">
        {{likes_local}} likes - {{commentsLength}} comments
      </span>
    </div>
    <div class="card-footer card-comments _comment_container">
      <div class="card-comment" v-for="(comment, index) in comments_local" :key="index">
        <img class="img-circle img-sm" :src="comment.user.img" :alt="comment.user.name" :title="comment.user.name">
        <div class="comment-text">
          <span class="username">
            {{comment.user.name}}
            <span class="text-muted float-right">{{comment.when}}</span>
          </span>
          {{comment.content}}
        </div>
      </div>
      </div>
    <div class="card-footer">
      <img class="img-fluid img-circle img-sm" :src="user_logged_img_local" :alt="user_logged_name_local" :title="user_logged_name_local"/>
      <!-- .img-push is used to add margin to elements next to floating images -->
      <div class="img-push">
        <b-input-group>
          <input type="text" v-model="valueInput" class="form-control form-control-sm" @keypress.enter="postComment($event)" placeholder="Press enter to post comment">
          <b-input-group-prepend>
            <b-button variant="outline-secondary" size="sm" @click="showDialog = !showDialog">
              <i class="fa fa-smile"/>
            </b-button>
          </b-input-group-prepend>
        </b-input-group>
        <VEmojiPicker
          v-show="showDialog"
          labelSearch="Search"
          lang="pt-BR"
          @select="onSelectEmoji"
        />
      </div>
    </div>
  </div>
</template>
<script>
import VEmojiPicker, {
// emojisDefault,
// categoriesDefault
} from 'v-emoji-picker'

import AImgCircle from '../../../AImgCircle'
export default {
  name: 'ASocialPost',
  components: {
    AImgCircle,
    VEmojiPicker
  },
  data () {
    return {
      valueInput: '',
      showDialog: false,
      user_profile_url_local: this.user_profile_url,
      user_img_local: this.user_img,
      user_name_local: this.user_name,
      user_desc_local: this.user_desc,
      read_local: this.read,
      img_local: this.img,
      content_local: this.content,
      likes_local: this.likes,
      comments_local: this.comments,
      user_logged_name_local: this.user_logged_name,
      user_logged_img_local: this.user_logged_img
    }
  },
  props: {
    user_profile_url: { type: String, default: '#' },
    user_img: String,
    user_name: String,
    user_desc: String,
    read: Boolean,
    img: String,
    content: String,
    likes: { type: String || Number },
    comments: Array,
    attachment: Object,
    user_logged_name: String,
    user_logged_img: String
  },
  computed: {
    readIcon () {
      return (this.read_local ? 'far' : 'fas') + ' fa-circle'
    },
    readTitle () {
      return this.read_local ? 'Mark as unread' : 'Mark as read'
    },
    commentsLength () {
      return this.comments_local.length
    }
  },
  mounted () {
    // console.log(categoriesDefault)
    // console.log('Total emojis:', emojisDefault.length)
  },
  methods: {
    postComment (e, c) {
      console.log(e, c)
      this.comments_local.push({
        user: { name: 'Davi Menezes', img: 'https://avatars3.githubusercontent.com/u/3998868?s=460&v=4' },
        content: e.target.value,
        when: new Date().toLocaleString()
      })
      this.valueInput = ''
    },
    toogleDialogEmoji () {
      this.showDialog = !this.showDialog
    },
    onSelectEmoji (emoji) {
      this.valueInput += emoji.data
      // Optional
      this.toogleDialogEmoji()
    }
  }
}
</script>
<style scoped>
  ._comment_container {
    height: 170px; overflow: auto;
  }
</style>
