<template>
  <div>

    <b-table :fields="fields" striped hover :items="items">

        <template #cell(icon)="data">
            <b-icon :icon="data.item.icon"></b-icon>
        </template>
        <template #cell(nameage)="data">
            {{ data.item.first_name.toUpperCase() }} is {{ data.item.age }} years old
        </template>
        <template #cell(surname)="data">
            {{ data.item.last_name }} 
        </template>


    </b-table>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        fields: [
          { key: 'nameage', label: 'First name and age' },
          { key: 'surname', label: 'Surname' },
          { key: 'icon', label: 'Icon' },

                ],
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald', icon: 'layers' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw', icon: 'pencil' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson', icon: 'house' },
          { age: 38, first_name: 'Jami', last_name: 'Carney', icon: 'globe' }
        ]
      }
    }
  }
</script>