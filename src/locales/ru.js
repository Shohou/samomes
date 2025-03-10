export default {
  ru: {
    routes: {
      tanks: 'Аквариумы',
      recipes: 'Рецепты',
      solutions: 'Готовые растворы',
      schedules: 'Расписание',
      remineralization: 'Реминерализация',
      dynamics: 'Динамика',
      about: 'О проекте',
      settings: 'Настройки',
      Github: 'Github'
    },
    units: {
      mm: 'мм',
      cm: 'см',
      l: 'л',
      ml: 'мл'
    },
    buttons: {
      save: 'Сохранить',
      edit: 'Изменить',
      add: 'Добавить',
      remove: 'Удалить'
    },
    guid: {
      start: 'Начните с этого',
      add_tank: 'Добавить аквариум',
      add_recipe: 'Создать рецепт',
      add_schedule: 'Составить расписание',
      where_am_i: 'Где я оказался?'
    },
    tanks: {
      alert: {
        title: 'У вас еще нет аквариума',
        todo: {
          action: 'Добавьте аквариум',
          text: ', чтобы вы могли создавать рецепты удобрений и составлять расписание по внесению удобрений.'
        }
      },
      addButton: 'Добавить аквариум',
      panels: {
        header: {
          pull: 'Потяните, чтобы отсортировать аквариумы'
        },
        body: {
          noSizes: 'Размеры не указаны'
        }
      },
      dialog: {
        tankNew: 'Новый аквариум',
        tankEdit: 'Редактирование аквариума',
        name: 'Название',
        nameHint: `Придумайте простое название, например "Аквариум 1" или "Большой аквариум"`,
        volume: 'Объем',
        volumeHint: 'Вы можете воспользоваться калькулятором объема ниже',
        length: 'Длина',
        width: 'Ширина',
        height: 'Высота',
        heightHint: 'Введите высоту чистого столба воды',
        glassThickness: 'Толщина стекла',
        orSizes: 'Или используйте размеры',
        messageTankAdd: 'Аквариум добавлен',
        messageTankEdit: 'Аквариум изменен',
        messageTankRemove: 'Аквариум удален',
        nameRules: {
          require: 'Введите название',
          exists: 'Аквариум с таким названием уже существует'
        },
        volumeRules: {
          require: 'Введите объем в литрах'
        }
      }
    },
    recipes: {
      alert: {
        title: 'У вас еще нет рецептов',
        todo: {
          action: 'Добавьте рецепты',
          text: ', чтобы вы могли использовать их для составления расписания по внесению удобрений.'
        }
      },
      addButton: 'Добавить рецепт',
      panels: {
        header: {
          pull: 'Потяните, чтобы отсортировать рецепты'
        },
        body: {
          noSizes: 'Размеры не указаны'
        }
      },
      dialog: {
        recipeNew: 'Новый рецепт',
        recipeEdit: 'Редактирование рецепта',
        name: 'Название',
        nameHint: `Придумайте простое название, например "Аквариум 1" или "Большой аквариум"`,
        volume: 'Объем',
        volumeHint: 'Вы можете воспользоваться калькулятором объема ниже',
        length: 'Длина',
        width: 'Ширина',
        height: 'Высота',
        heightHint: 'Введите высоту чистого столба воды',
        glassThickness: 'Толщина стекла',
        orSizes: 'Или используйте размеры',
        messageTankAdd: 'Аквариум добавлен',
        messageTankEdit: 'Аквариум изменен',
        messageTankRemove: 'Аквариум удален',
        nameRules: {
          require: 'Введите название',
          exists: 'Аквариум с таким названием уже существует'
        },
        volumeRules: {
          require: 'Введите объем в литрах'
        }
      }
    },
    schedules: {
      alert: {
        title: 'У вас еще нет рецептов',
        todo: {
          action: 'Добавьте рецепты',
          text: ', чтобы вы могли использовать их для составления расписания по внесению удобрений.'
        }
      },
      addButton: 'Добавить аквариум'
    }
  }
}
