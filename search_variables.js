var search_ractive = undefined;
var search_index = undefined;
var search_ractive_target_selector = '[role=main]';


    var search_ractive_template = `
        <h1>Search{{#if query }} "{{query}}"{{/if}}</h1>
        {{#results}}
          <h2>{{.doc.title}}</h2>
          <a href="{{.ref}}?mark={{query}}">{{.ref}}</a>
          <hr/>
        {{/results}}`;
