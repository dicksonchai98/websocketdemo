<script setup>
import { onMounted, reactive } from "vue";
import { getDatabase, onValue, ref, set } from "firebase/database";
const db = getDatabase();
const msgRef = ref(db, "messages");
const data = reactive({});
const userInfo = reactive({
  userId: "",
  content: "",
});
// 上傳信息
const writeUserData = () => {
  const db = getDatabase();
  const msgRef = ref(db, "messages/" + userInfo.userId);
  set(msgRef, {
    message: userInfo.content,
  });
  userInfo.content = "";
  userInfo.userId = "";
};
// 在dom架好的時候讀取資料庫的資料
onMounted(() => {
  onValue(msgRef, (snapshot) => {
    console.log(snapshot.val());
    data.value = snapshot.val();
    console.log(data);
  });
});
</script>

<template>
  <div id="app">
    <div id="name-input-container">
      <input
        type="text"
        v-model="userInfo.userId"
        placeholder="请输入您的名字"
      />
    </div>
    <div id="chat-container">
      <div v-for="(msg, index) in data.value" :key="index" class="message">
        {{ msg.message }}
      </div>
    </div>
    <input
      type="text"
      id="message-input"
      placeholder="请输入消息，按回车发送"
      v-model="userInfo.content"
      @keyup.enter="writeUserData"
    />
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  overflow: hidden; /* 隐藏页面滚动条 */
}
#chat-container {
  position: relative;
  background-color: white;
  color: black;
  width: 80%;
  border: 1px solid black;
  height: 100vh;
  margin: auto;
}
#message-input {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
  padding: 10px;
  font-size: 16px;
}
.message {
  width: fit-content;
  padding: 10px;
  height: 30px;
  margin: 20px;
  box-shadow: 0px 5px 0px black;
}
#name-input-container {
  margin: 10px auto;
  text-align: center;
}
</style>
