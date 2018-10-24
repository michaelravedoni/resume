---
title: Bibliothèque plateforme
date: '2018-07-08 09:00:00'
layout: publications

toc:
  firstChapters:
    - heading: Introduction
      page: 1
      pdfPage: 9
      slug: 01-introduction
    - heading: Périmètre
      page: 2
      pdfPage: 10
      slug: 02-perimetre
    - heading: Bibliothèques du XXI<sup>e</sup> siècle
      page: 3
      pdfPage: 11
      slug: 03-bibliotheques-xxi-siecle
    - heading: Défis pour les bibliothèques du XXI<sup>e</sup> siècle
      page: 11
      pdfPage: 19
      slug: 04-defis-bibliotheques-xxi-siecle
  models:
    chapter:
      heading: Modèles existants
      page: 15
      pdfPage: 23
      slug: null
    sections:
    - heading: Bibliothèque troisième lieu
      page: 15
      pdfPage: 23
      slug: null
    - heading: Four spaces model
      page: 17
      pdfPage: 25
      slug: null
    - heading: Library as platform
      page: 22
      pdfPage: 30
      slug: null
  visions:
    chapter:
      heading: Visions et perspectives existantes
      page: 26
      pdfPage: 34
      slug: null
    sections:
    - heading: Netherlands Institute for Public Libraries
      page: 26
      pdfPage: 34
      slug: null
    - heading: Danish Agency for Library and Media
      page: 29
      pdfPage: 37
      slug: null
    - heading: New librarianship de David Lankes
      page: 33
      pdfPage: 41
      slug: null
  synthesis:
    chapter:
      heading: Synthèse et recommandations générales
      page: 39
      pdfPage: 47
      slug: 07-recommandations
  model:
    chapter:
      heading: Modèle – Bibliothèque plateforme
      page: 43
      pdfPage: 51
      slug: null
  example:
    chapter:
      heading: Exemple – Le makerspace
      page: 59
      pdfPage: 67
      slug: null
    sections:
    - heading: Contexte – Médiathèque Valais
      page: 59
      pdfPage: 67
    - heading: Qu’est-ce qu’un makerspace ?
      page: 59
      pdfPage: 67
      slug: null
    - heading: Application du modèle
      page: 60
      pdfPage: 68
    - heading: Déclinaisons
      page: 69
      pdfPage: 77
    - heading: Eléments spécifiques
      page: 72
      pdfPage: 80
  conclusion:
    chapter:
      heading: Conclusion
      page: 77
      pdfPage: 85
      slug: 10-conclusion
  appendix:
    - heading: Bibliographie
      page: 79
      pdfPage: 87
    - heading: "Annexe 1 : Illustrations"
      page: 85
      pdfPage: 93
    - heading: "Annexe 2 : Équipement d’un makerspace"
      page: 89
      pdfPage: 97
    - heading: "Annexe 3 : Ressources d’activités ou d’outils pour un makerspace"
      page: 97
      pdfPage: 105
---

<section class="uk-section uk-section-small uk-section-default uk-container">
	{% for c in page.toc.firstChapters %}
		<h3 class="uk-h4 uk-margin-remove">{{c.heading}} <small class="uk-float-right"><a href="{{site.url}}/doc/ravedoni-2018-tb-bibliotheque-plateforme.pdf#page={{c.pdfPage}}" target="_blank"><i class="far fa-file-pdf"></i> PDF [{{c.page}}]</a>{% if c.slug %} — <a href="{{c.slug}}/"><i class="fab fa-html5"></i> HTML</a>{% endif %}</small></h3>
	{% endfor %}
</section>

<section class="uk-section uk-section-small uk-section-muted uk-container">
	<h3>{{page.toc.models.chapter.heading}} <small class="uk-float-right"><a href="{{site.url}}/doc/ravedoni-2018-tb-bibliotheque-plateforme.pdf#page={{page.toc.models.chapter.pdfPage}}" target="_blank"><i class="far fa-file-pdf"></i> PDF [{{page.toc.models.chapter.page}}]</a></small></h3>
	<div class="uk-child-width-expand@s uk-text-center uk-grid-match" uk-grid>
		{% for c in page.toc.models.sections %}
		<div>
			<div class="uk-card uk-card-default uk-card-body">{{c.heading}} <br><small><a href="{{site.url}}/doc/ravedoni-2018-tb-bibliotheque-plateforme.pdf#page={{c.pdfPage}}" target="_blank"><i class="far fa-file-pdf"></i> PDF [{{c.page}}]</a>{% if c.slug %} — <a href="{{page.url}}{{c.slug}}/"><i class="fab fa-html5"></i> HTML</a>{% endif %}</small></div>
		</div>
		{% endfor %}
	</div>
</section>
<section class="uk-section uk-section-small uk-section-muted uk-container">
	<h3>{{page.toc.visions.chapter.heading}} <small class="uk-float-right"><a href="{{site.url}}/doc/ravedoni-2018-tb-bibliotheque-plateforme.pdf#page={{page.toc.visions.chapter.pdfPage}}" target="_blank"><i class="far fa-file-pdf"></i> PDF [{{page.toc.visions.chapter.page}}]</a></small></h3>
	<div class="uk-child-width-expand@s uk-text-center uk-grid-match" uk-grid>
    {% for c in page.toc.visions.sections %}
    <div>
			<div class="uk-card uk-card-default uk-card-body">{{c.heading}} <br><small><a href="{{site.url}}/doc/ravedoni-2018-tb-bibliotheque-plateforme.pdf#page={{c.pdfPage}}" target="_blank"><i class="far fa-file-pdf"></i> PDF [{{c.page}}]</a>{% if c.slug %} — <a href="{{c.slug}}/"><i class="fab fa-html5"></i> HTML</a>{% endif %}</small></div>
		</div>
		{% endfor %}
	</div>
</section>
<section class="uk-section uk-section-small uk-section-secondary uk-container">
	<h3>{{page.toc.synthesis.chapter.heading}} <small class="uk-float-right"><a href="{{site.url}}/doc/ravedoni-2018-tb-bibliotheque-plateforme.pdf#page={{page.toc.synthesis.chapter.pdfPage}}" target="_blank"><i class="far fa-file-pdf"></i> PDF [{{page.toc.synthesis.chapter.page}}]{% if page.toc.synthesis.chapter.slug %} — <a href="{{page.toc.synthesis.chapter.slug}}/"><i class="fab fa-html5"></i> HTML</a>{% endif %}</a></small></h3>
</section>
<section class="uk-section uk-section-small uk-section-primary uk-container">
	<h3>{{page.toc.model.chapter.heading}} <small class="uk-float-right"><a href="{{site.url}}/doc/ravedoni-2018-tb-bibliotheque-plateforme.pdf#page={{page.toc.model.chapter.pdfPage}}" target="_blank"><i class="far fa-file-pdf"></i> PDF [{{page.toc.model.chapter.page}}]</a>{% if page.toc.model.chapter.slug %} — <a href="{{page.url}}{{page.toc.model.chapter.slug}}/"><i class="fab fa-html5"></i> HTML</a>{% endif %}</small></h3>
</section>
<section class="uk-section uk-section-small uk-section-muted uk-container">
	<h3>{{page.toc.example.chapter.heading}} <small class="uk-float-right"><a href="{{site.url}}/doc/ravedoni-2018-tb-bibliotheque-plateforme.pdf#page={{page.toc.example.chapter.pdfPage}}" target="_blank"><i class="far fa-file-pdf"></i> PDF [{{page.toc.example.chapter.page}}]</a></small></h3>
	<div class="uk-child-width-1-3@s uk-text-center uk-grid-match" uk-grid>
    {% for c in page.toc.example.sections %}
    <div>
			<div class="uk-card uk-card-default uk-card-body">{{c.heading}} <br><small><a href="{{site.url}}/doc/ravedoni-2018-tb-bibliotheque-plateforme.pdf#page={{c.pdfPage}}" target="_blank"><i class="far fa-file-pdf"></i> PDF [{{c.page}}]</a>{% if c.slug %} — <a href="{{c.slug}}/"><i class="fab fa-html5"></i> HTML</a>{% endif %}</small></div>
		</div>
		{% endfor %}
	</div>
</section>

<section class="uk-section uk-section-small uk-section-default uk-container">
	<h3>{{page.toc.conclusion.chapter.heading}} <small class="uk-float-right"><a href="{{site.url}}/doc/ravedoni-2018-tb-bibliotheque-plateforme.pdf#page={{page.toc.conclusion.chapter.pdfPage}}" target="_blank"><i class="far fa-file-pdf"></i> PDF [{{page.toc.conclusion.chapter.page}}]</a>{% if page.toc.conclusion.chapter.slug %} — <a href="{{page.url}}{{page.toc.conclusion.chapter.slug}}/"><i class="fab fa-html5"></i> HTML</a>{% endif %}</small></h3>
  <hr />
  {% for c in page.toc.appendix %}
  <h3 class="uk-h5 uk-margin-remove">{{c.heading}} <small class="uk-float-right"><a href="{{site.url}}/doc/ravedoni-2018-tb-bibliotheque-plateforme.pdf#page={{c.pdfPage}}" target="_blank"><i class="far fa-file-pdf"></i> PDF [{{c.page}}]</a>{% if c.slug %} — <a href="{{c.slug}}/"><i class="fab fa-html5"></i> HTML</a>{% endif %}</small></h3>
  {% endfor %}
</section>

<style>
.uk-container .uk-container {
    padding-left: inherit;
    padding-right: inherit;
}
</style>
