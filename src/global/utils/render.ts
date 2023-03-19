import ejs from 'ejs';

export interface TemplateData
{
  projectName: string
}

const render = (content: string, data: TemplateData) => ejs.render(content, data);

export {
  render
};