if (!Apps.findOne({_id: "matriculas_horarios"})) {
  Apps.insert({
    _id: "matriculas_horarios",
    name: "MatriculasHorarios",
    title: "Matriculas/Horarios",
    router_link: "matriculas_horarios",
    active: true
  });
}

if (!Menus.findOne({_id: "matriculas_horarios"})) {
  Menus.insert({
    _id: "matriculas_horarios",
    title: "Matriculas/Horarios",
    icon_class: "fa-clock-o",
    order: 1,
    parent: "menu_alunos",
    app_id: "matriculas_horarios",
  });
}