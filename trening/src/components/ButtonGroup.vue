<template>
    <div>
    <b-button-group vertical style="bottom: 30px; right:30px; position:absolute">

        <b-button v-b-toggle.sidebar-1><b-icon-layers-half></b-icon-layers-half></b-button>
        <b-sidebar  id="sidebar-1" title="Layers" shadow>
            <div class="px-3 py-2"></div>

            <b-card style="padding:5px"
                overlay
                img-src="https://picsum.photos/900/250/?image=3"
                img-alt="Card Image"
               
            >
                <b-button>Open</b-button>
            </b-card>

            <b-card style="padding:5px"
                overlay
                img-src="https://picsum.photos/900/250/?image=3"
                img-alt="Card Image"
               
            >
                <b-button href="#">Open</b-button>
            </b-card>
                

        </b-sidebar>

        <b-button v-b-toggle.sidebar-2><b-icon-globe></b-icon-globe></b-button>
        <b-sidebar id="sidebar-2" title="Map" shadow>
            <div class="px-3 py-2"></div>
        </b-sidebar>

        <b-button v-b-toggle.sidebar-3><b-icon-pencil></b-icon-pencil></b-button>
        <b-sidebar id="sidebar-3" title="Draw" shadow>
            <div class="px-3 py-2"></div>
        </b-sidebar>
    </b-button-group>

    </div>
</template>