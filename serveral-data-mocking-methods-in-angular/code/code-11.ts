/** 此 Module 负责导出一个实现全局 Layout 的组件 */
@NgModule({
    declarations: [LayoutComponent],
    imports: [CommonModule, RouterModule],
    exports: [LayoutComponent],
    providers: [
        {
            provide: LOGO,
            useValue: INTERNAL_LOGO,
        },
    ],
})
export class LayoutModule {}
