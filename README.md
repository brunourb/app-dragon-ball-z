### Aula 16-05

#### Projeto Angular

#### Instalação CLI

```shell
npm i -g @angular/cli@16.2.14
```

```shell
ng new spa-dragon-ball-z --routing --no-standalone
cd spa-dragon-ball-z
```
#### Passos

#### Criar módulo core
```shell
ng g m core
CREATE src/app/core/core.module.ts (190 bytes)
```

#### Criar módulo shared
```shell
ng g m shared
CREATE src/app/shared/shared.module.ts (192 bytes)
```

#### Criar pasta pages
```shell
mkdir src/app/pages      
```

#### Criar módulo characters
```shell
ng g m pages/characters --routing
CREATE src/app/pages/characters/characters-routing.module.ts (253 bytes)
CREATE src/app/pages/characters/characters.module.ts (296 bytes)
```

#### Criar componente characters-list
```shell
ng g c pages/characters/characters-list
CREATE src/app/pages/characters/characters-list/characters-list.component.css (0 bytes)
CREATE src/app/pages/characters/characters-list/characters-list.component.html (30 bytes)
CREATE src/app/pages/characters/characters-list/characters-list.component.spec.ts (658 bytes)
CREATE src/app/pages/characters/characters-list/characters-list.component.ts (234 bytes)
UPDATE src/app/pages/characters/characters.module.ts (414 bytes)
```

#### Criar componente characters-detail
```shell
ng g c pages/characters/characters-detail
CREATE src/app/pages/characters/characters-detail/characters-detail.component.css (0 bytes)
CREATE src/app/pages/characters/characters-detail/characters-detail.component.html (32 bytes)
CREATE src/app/pages/characters/characters-detail/characters-detail.component.spec.ts (672 bytes)
CREATE src/app/pages/characters/characters-detail/characters-detail.component.ts (242 bytes)
UPDATE src/app/pages/characters/characters.module.ts (538 bytes)
```

#### Criar módulo planets
```shell
ng g m pages/planets --routing          
CREATE src/app/pages/planets/planets-routing.module.ts (250 bytes)
CREATE src/app/pages/planets/planets.module.ts (284 bytes)
```

#### Criar componente planets-list
```shell
ng g c pages/planets/planets-list
CREATE src/app/pages/planets/planets-list/planets-list.component.css (0 bytes)
CREATE src/app/pages/planets/planets-list/planets-list.component.html (27 bytes)
CREATE src/app/pages/planets/planets-list/planets-list.component.spec.ts (637 bytes)
CREATE src/app/pages/planets/planets-list/planets-list.component.ts (222 bytes)
UPDATE src/app/pages/planets/planets.module.ts (390 bytes)
```
#### Criar componente planets-detail
```shell
ng g c pages/planets/planets-detail
CREATE src/app/pages/planets/planets-detail/planets-detail.component.css (0 bytes)
CREATE src/app/pages/planets/planets-detail/planets-detail.component.html (29 bytes)
CREATE src/app/pages/planets/planets-detail/planets-detail.component.spec.ts (651 bytes)
CREATE src/app/pages/planets/planets-detail/planets-detail.component.ts (230 bytes)
UPDATE src/app/pages/planets/planets.module.ts (502 bytes)
```