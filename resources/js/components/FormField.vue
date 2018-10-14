<template>
    <default-field :field="field">
        <template slot="field">
            <input :id="field.name" type="text"
                class="w-full form-control form-input form-input-bordered"
                :class="errorClasses"
                placeholder="user/track_title"
                v-model="value"
                @change="soundCloud()"
            />
            <iframe id="track_name" width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay"
                    src="">
            </iframe>

            <p v-if="hasError" class="my-2 text-danger">
                {{ firstError }}
            </p>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],
    mounted() {
       if (this.value.length > 0){
           this.play(false);
       }
    },
    methods: {
        soundCloud: function() {
            this.play(true);
        },
        play: function (autoplay) {
            document.getElementById('track_name').src = 'https://w.soundcloud.com/player/?url=https://soundcloud.com/'+this.value+'&color=%23ff5500&auto_play='+autoplay+'&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false';
        },
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
          this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
          formData.append(this.field.attribute, this.value || '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
          this.value = value
        }
    }
}
</script>
