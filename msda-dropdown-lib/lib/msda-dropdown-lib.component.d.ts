import { AfterViewInit, ElementRef, OnChanges, OnInit, QueryList } from '@angular/core';
export declare class MsdaDropdownLibComponent implements OnInit, AfterViewInit, OnChanges {
    navItemRefs: QueryList<any>;
    sectionElRefs: QueryList<any>;
    popoverElRef: ElementRef;
    headerElRef: ElementRef;
    arrowElRef: ElementRef;
    contentElRef: ElementRef;
    backgroundElRef: ElementRef;
    popoverLeft: any;
    dimensions: {
        width: number;
        height: number;
        x: number;
    }[];
    navigationData: any;
    showSection(index: any): void;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
}
