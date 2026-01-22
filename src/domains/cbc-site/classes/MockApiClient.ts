/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import IApiClient from '../interfaces/IApiClient';
import { newsItems } from '../../../shared/constants/news';
import { galleries } from '../../../shared/constants/mediaItems';
import { eventItems } from '../../../shared/constants/events';
import {
  footerNavigation,
  modalitiesNavigation,
  navbar,
  tertiaryNavigation,
} from '../../../shared/constants/navigation';
import { PageResume } from '../interfaces/Page/PageResume';
import { pagesBanners } from '../../../shared/constants/banners';
import { infoData } from '../../../shared/constants/infoData';
import modalityData from '../../../shared/constants/modalities';
import { documentsMock } from '../../../shared/constants/antidopingDocuments';

class MockApiClient implements IApiClient {
  private getPageData(path: string): PageResume {
    const {
      mobileBanner,
      bmxBanner,
      eSportBanner,
      estradasBanner,
      institutionalBanner,
      mtbBanner,
      paraTodosBanner,
      paraTodosMobileBanner,
      paraciclismoBanner,
      pistasBanner,
      bmxFreeStyle,
      bmxRacingMobileBanner,
      freestyleMobileBanner,
      eSportsMobileBanner,
      estradaMobileBanner,
      mtbMobileBanner,
      paraciclismoMobileBanner,
      pistaMobileBanner,
    } = pagesBanners;
    const pageDataMap: Record<string, PageResume> = {
      '/': {
        slug: 'home',
        mobileBanner: mobileBanner,
        menuItems: [
          {
            type: 'modalities',
            navigationItems: [],
          },
        ],
      },
      '/modalidades/mtb': {
        title: 'Mountain Bike',
        slug: 'mtb',
        mobileBanner: mtbMobileBanner,
        banner: mtbBanner,
      },
      '/modalidades/paraciclismo': {
        title: 'Paraciclismo',
        slug: 'paraciclismo',
        mobileBanner: paraciclismoMobileBanner,
        banner: paraciclismoBanner,
      },
      '/modalidades/pista': {
        title: 'Pista',
        slug: 'pista',
        mobileBanner: pistaMobileBanner,
        banner: pistasBanner,
      },

      '/modalidades/bmx-racing': {
        title: 'BMX Racing',
        slug: 'bmx-racing',
        mobileBanner: bmxRacingMobileBanner,
        banner: bmxBanner,
      },
      '/modalidades/estrada': {
        title: 'Ciclismo de Estrada',
        slug: 'estrada',
        mobileBanner: estradaMobileBanner,
        banner: estradasBanner,
      },
      '/modalidades/esports': {
        title: 'e-Sports',
        slug: 'esports',
        mobileBanner: eSportsMobileBanner,
        banner: eSportBanner,
      },
      '/modalidades/bmx-freestyle': {
        title: 'BMX Freestyle',
        slug: 'bmx-freestyle',
        mobileBanner: freestyleMobileBanner,
        banner: bmxFreeStyle,
      },
      '/modalidades/ciclismo-para-todos': {
        title: 'Ciclismo para Todos',
        slug: 'ciclismo-para-todos',
        mobileBanner: paraTodosMobileBanner,
        banner: paraTodosBanner,
      },

      '/institucional': {
        title: 'Institucional',
        banner: institutionalBanner,
        content:
          'A Confederação Brasileira de Ciclismo (CBC) é a entidade máxima do ciclismo no Brasil, responsável por fomentar, regulamentar e desenvolver a modalidade em suas diferentes vertentes: estrada, pista, mountain bike, BMX, paraciclismo, eSports e outras. \n\n\nCom atuação nacional e reconhecimento internacional, a CBC promove campeonatos, forma atletas, capacita profissionais e apoia federações estaduais, contribuindo para o fortalecimento do esporte em todas as regiões do país. \n\n\nNosso compromisso é impulsionar o ciclismo como prática esportiva, de lazer e de alto rendimento, respeitando os valores do esporte, da ética e da inclusão.',
        subContent: `Acredito que o ciclismo deve ser um esporte acessível a todos, e minha gestão se dedicará a criar um ambiente altamente profissional, onde cada ciclista, independentemente de sua origem, tenha a oportunidade de se desenvolver. \n\nJuntos, vamos transformar o ciclismo brasileiro em uma importante referência. \n\nVamos construir um futuro onde nossos atletas possam sonhar alto e alcançar seus objetivos com o apoio e a estrutura que merecem.`,
      },
      '/documentos': {
        title: 'Documentos',
        slug: 'documentos',
      },
      '/imprensa': {
        title: 'Imprensa',
        slug: 'imprensa',
      },
      '/contato': {
        title: 'Contato',
        slug: 'contato',
      },
      '/federacoes': {
        title: 'Federações',
        slug: 'federacoes',
      },
      '/antidoping': {
        title: 'Antidoping',
        slug: 'antidoping',
      },
    };

    return (
      pageDataMap[path] || {
        slug: 'not-found',
        menuItems: [],
      }
    );
  }

  execute<T = unknown, D = unknown>(
    _config: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T, D>> {
    throw new Error('Method not implemented.');
  }

  get<T = unknown, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T, D>> {
    if (url === '/info-data') {
      return Promise.resolve({
        data: infoData as T,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      } as AxiosResponse<T, D>);
    }

    if (url.startsWith('/info-data/')) {
      const category = url.replace('/info-data/', '').toLowerCase();
      const filtered = infoData.filter(
        (item: { category?: string }) =>
          item.category && item.category.toLowerCase() === category,
      );
      return Promise.resolve({
        data: filtered as T,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      } as AxiosResponse<T, D>);
    }

    if (url.startsWith('/modalities/')) {
      const id = url.split('/').pop();
      const modality =
        modalityData.find(
          (item: { modalityId: string }) => item.modalityId === id,
        ) || null;
      return Promise.resolve({
        data: modality as T,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      } as AxiosResponse<T, D>);
    }

    if (url.startsWith('/antidoping-docs')) {
      return Promise.resolve({
        data: documentsMock as T,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      } as AxiosResponse<T, D>);
    }

    if (
      url.startsWith('/') &&
      !url.startsWith('/news') &&
      !url.startsWith('/medias') &&
      !url.startsWith('/links') &&
      !url.startsWith('/events')
    ) {
      const pageData = this.getPageData(url);
      return Promise.resolve({
        data: pageData as T,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      } as AxiosResponse<T, D>);
    }

    if (url === '/news') {
      return Promise.resolve({
        data: newsItems as T,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      } as AxiosResponse<T, D>);
    }

    if (url.startsWith('/news/')) {
      const parts = url.split('/').filter(Boolean);
      const slugIndex = parts.indexOf('slug');
      const slug = slugIndex !== -1 ? parts[slugIndex + 1] : null;

      if (!slug) {
        const id = parts[1];
        const found = newsItems.find((item) => item.id === id) || null;
        return Promise.resolve({
          data: found as unknown as T,
          status: 200,
          statusText: 'OK',
          headers: {},
          config,
        } as AxiosResponse<T, D>);
      }

      const found =
        newsItems.filter((item) => item.modalitySlug === slug) || [];
      return Promise.resolve({
        data: found as unknown as T,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      } as AxiosResponse<T, D>);
    }

    if (url === '/events') {
      return Promise.resolve({
        data: eventItems as T,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      } as AxiosResponse<T, D>);
    }

    if (url.startsWith('/events/')) {
      const parts = url.split('/').filter(Boolean);
      const slugIndex = parts.indexOf('slug');
      const slug = slugIndex !== -1 ? parts[slugIndex + 1] : null;

      if (!slug) {
        const id = parts[1];
        const found = eventItems.find((item) => item.id === id) || null;
        return Promise.resolve({
          data: found as unknown as T,
          status: 200,
          statusText: 'OK',
          headers: {},
          config,
        } as AxiosResponse<T, D>);
      }

      const found =
        eventItems.filter((item) => item.modalitySlug === slug) || [];
      return Promise.resolve({
        data: found as unknown as T,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      } as AxiosResponse<T, D>);
    }

    if (url.startsWith('/medias') || url.startsWith('/galleries')) {
      const urlParts = url.split('/');
      if (urlParts.length === 3 && urlParts[2]) {
        const id = urlParts[2];
        const gallery = galleries.find((g) => g.id === id);
        return Promise.resolve({
          data: gallery as T,
          status: 200,
          statusText: 'OK',
          headers: {},
          config,
        } as AxiosResponse<T, D>);
      }

      return Promise.resolve({
        data: galleries as T,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      } as AxiosResponse<T, D>);
    }

    switch (url) {
      case '/links/primary':
        return Promise.resolve({
          data: navbar as T,
          status: 200,
          statusText: 'OK',
          headers: {},
          config,
        } as AxiosResponse<T, D>);

      case '/links/secondary':
        return Promise.resolve({
          data: modalitiesNavigation as T,
          status: 200,
          statusText: 'OK',
          headers: {},
          config,
        } as AxiosResponse<T, D>);

      case '/links/tertiary':
        return Promise.resolve({
          data: tertiaryNavigation as T,
          status: 200,
          statusText: 'OK',
          headers: {},
          config,
        } as AxiosResponse<T, D>);

      case '/links/footer':
        return Promise.resolve({
          data: footerNavigation as T,
          status: 200,
          statusText: 'OK',
          headers: {},
          config,
        } as AxiosResponse<T, D>);

      default:
        return Promise.reject(new Error('Not Found'));
    }
  }

  post<T = unknown, D = unknown>(
    _url: string,
    _data?: D,
    _config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T, D>> {
    throw new Error('Method not implemented.');
  }
  put<T = unknown, D = unknown>(
    _url: string,
    _data?: D,
    _config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T, D>> {
    throw new Error('Method not implemented.');
  }
  delete<T = unknown, D = unknown>(
    _url: string,
    _config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T, D>> {
    throw new Error('Method not implemented.');
  }
  patch<T = unknown, D = unknown>(
    _url: string,
    _data?: Partial<D>,
    _config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T, Partial<D>>> {
    throw new Error('Method not implemented.');
  }
}

export default MockApiClient;
