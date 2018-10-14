<template>
<table>
    <tr>
        <td id="field_name" style="color:#7C858E; width:300px; text-align: left;"></td>
        <td style="width:560px;">
            <iframe id="track_name" width="400" height="20" scrolling="no" frameborder="no"
                    src="">
            </iframe>
        </td>
    </tr>
</table>

</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
    mounted() {
        document.getElementById('field_name').innerHTML = this.field.name;
        document.getElementById('track_name').src = 'https://w.soundcloud.com/player/?url=https://soundcloud.com/'+this.field.value+'&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false';
    },
}
</script>
