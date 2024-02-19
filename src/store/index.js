import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      items: [
        {
          id: 1,
          name: "Prepare breakfast",
          description:
            "Choose a recipe: Decide what you want to make for breakfast. You can choose from options like pancakes, eggs, oatmeal, or smoothies",
          status: true,
        },
        {
          id: 2,
          name: "Create day's plan",
          description:
            "It includes organizing activities, appointments, and to-do items to ensure productivity and efficiency throughout the day.",
          status: false,
        },
        {
          id: 3,
          name: "Call to brother",
          description:
            "The task may involve steps such as scheduling a convenient time to call, dialing the brother's phone number, engaging in conversation, and expressing care and interest in the brother's well-being.",
          status: false,
        },
      ],
    };
  },
  mutations: {
    addItem(state, itemData) {
      const newItem = {
        id: Date.now(),
        name: itemData.name,
        description: itemData.description,
        status: itemData.status,
      };

      state.items.unshift(newItem);
    },
    updateItemStatus(state, { id, status }) {
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.status = status;
      }
    },
  },
  actions: {
    addItem(context, itemData) {
      context.commit("addItem", itemData);
    },
    updateItemStatus(context, { id, status }) {
      context.commit("updateItemStatus", { id, status });
    },
  },
  getters: {
    items(state) {
      state.items;
    },
    item(state) {
      return (id) => {
        return state.items.find((item) => item.id === id);
      };
    },
  },
});

export default store;
