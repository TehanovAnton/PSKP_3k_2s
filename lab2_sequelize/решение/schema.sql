use pskp

--drop table AUDITORIUM
--drop table AUDITORIUM_TYPE
--drop table SUBJECT
--drop table TEACHER
--drop table PULPIT
--drop table FACULTY

create table FACULTY(faculty nvarchar(100) primary key,
	faculty_name nvarchar(100))

insert into FACULTY  (faculty,   faculty_name)
             values  ('IDiP',   'Izdat''e delo i poligrafiya');
insert into FACULTY   (FACULTY,   FACULTY_NAME )
            values  ('HTiT',   'Himicheskaya tekhnologiya i tekhnika');
insert into FACULTY   (FACULTY,   FACULTY_NAME )
            values  ('LHF',     'Lesohozyajstvennyj fak''t');
insert into FACULTY   (FACULTY,   FACULTY_NAME )
            values  ('IEF',     'Inzhenerno-ekonomicheskij fak''t');
insert into FACULTY   (FACULTY,   FACULTY_NAME )
            values  ('TTLP',    'Tekhnologiya i tekhnika lesnoj promyshlennosti');
insert into FACULTY   (FACULTY,   FACULTY_NAME )
            values  ('TOV',     'Tekhnologiya organicheskih veshchestv')
-----------------------------------------------

create table PULPIT (pulpit nvarchar(100) primary key,
	pulpit_name nvarchar(100),
	faculty nvarchar(100),
	foreign key (faculty) references FACULTY(faculty) on delete cascade)

insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                   FACULTY )
             values  ('ISiT',    'Iformacionnyj sistem i tekhnologij ',                         'IDiP'  );
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                   FACULTY )
             values  ('POiSOI', 'Poligraficheskogo oborudovaniya i sistem obrabotki informacii ', 'IDiP'  );
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                   FACULTY)
              values  ('LV',      'Lesovodstva',                                                 'LHF') ;         
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                   FACULTY)
             values  ('OV',      'Ohotovedeniya',                                                 'LHF') ;   
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                   FACULTY)
             values  ('LU',      'Lesoustrojstva',                                              'LHF');           
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                   FACULTY)
             values  ('LZiDV',   'Lesozashchity i drevesinovedeniya',                               'LHF');                
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                   FACULTY)
             values  ('LPiSPS',  'Landshaftnogo proektirovaniya i sadovo-parkovogo stroit''va','LHF');                  
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                   FACULTY)
             values  ('TL',     'Transporta lesa',                                              'TTLP');                        
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                   FACULTY)
             values  ('LMiLZ',  'Lesnyh mashin i tekhnologii lesozagotovok',                      'TTLP');                        
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                   FACULTY)
             values  ('OH',     'Organicheskoj himii',                                           'TOV');            
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                              FACULTY)
             values  ('TNHSiPPM','Tekhnologii neftekhimicheskogo sinteza i pererabotki polimernyh materialov','TOV');             
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                      FACULTY)
             values  ('TNViOHT','Tekhnologii neorganicheskih veshchestv i obshchej himicheskoj tekhnologii ','HTiT');                    
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                                         FACULTY)
             values  ('HTEPiMEE','Himii, tekhnologii elektrohimicheskih proizvodstv i materialov elektronnoj tekhniki', 'HTiT');
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                      FACULTY)
             values  ('ETiM',    'ekonomicheskoj teorii i marketinga',                              'IEF');   
insert into PULPIT   (PULPIT,    PULPIT_NAME,                                                      FACULTY)
             values  ('MiEP',   'Menedzhmenta i ekonomiki prirodop''vaniya',                      'IEF');    
-----------------------------------------------


create table TEACHER (teacher nvarchar(100) primary key,
	teacher_name nvarchar(100),
	pulpit nvarchar(100),
	foreign key (pulpit) references PULPIT(pulpit) on delete cascade)

insert into  TEACHER    (TEACHER,   TEACHER_NAME, PULPIT )
                       values  ('SMLV',    'Smelov Vladimir Vladislavovich',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('AKNVCH',    'Akunovich Stanislav Ivanovich',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('KLSNV',    'Kolesnikov Leonid Val''ich',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('GRMN',    'German Oleg Vit''vich',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('LSHCHNK',    'Lashchenko Anatolij Pvalovich',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('BRKVCH',    'Brakovich Andrej Ig''ich',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('DDK',     'Dedko Aleksandr Ark''ich',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('KBL',     'Kabajlo Aleksandr Serafimovich',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('URB',     'Urbanovich Pavel Pavlovich',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('RMNK',     'Romanenko Dmitrij Mihajlovich',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('PSTVLV',  'Pustovalova Nataliya Nikolaevna', 'ISiT' );
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('?',     'Neizvestnyj',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                      values  ('GRN',     'Gurin Nikolaj Ivanovich',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ZHLK',     'ZHilyak Nadezhda Aleksandrovna',  'ISiT');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('BRTSHVCH',   'Bartashevich Svyatoslav Aleksandrovich',  'POiSOI');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('YUDNKV',   'YUdenkov Viktor Stepanovich',  'POiSOI');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('BRNVSK',   'Baranovskij Stanislav Ivanovich',  'ETiM');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('NVRV',   'Neverov Aleksandr Vas''ich',  'MiEP');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('RVKCH',   'Rovkach Andrej Ivanovich',  'OV');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('DMDK', 'Demidko Marina Nikolaevna',  'LPiSPS');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('MSHKVSK',   'Mashkovskij Vladimir Petrovich',  'LU');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('LBH',   'Laboha Konstantin Valentinovich',  'LV');
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ZVGCV',   'Zvyagincev Vyacheslav Borisovich',  'LZiDV'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('BZBRDV',   'Bezborodov Vladimir Stepanovich',  'OH'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('PRKPCHK',   'Prokopchuk Nikolaj Romanovich',  'TNHSiPPM'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('NSKVC',   'Naskovec Mihail Trofimovich',  'TL'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('MHV',   'Mohov Sergej Petrovich',  'LMiLZ'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ESHCHNK',   'Eshchenko Lyudmila Semenovna',  'TNViOHT'); 
insert into  TEACHER    (TEACHER,  TEACHER_NAME, PULPIT )
                       values  ('ZHRSK',   'ZHarskij Ivan Mihajlovich',  'HTEPiMEE'); 
-----------------------------------------------


create table SUBJECT (subject nvarchar(100) primary key,
	subject_name nvarchar(100),
	pulpit nvarchar(100),
	foreign key (pulpit) references PULPIT(pulpit) on delete cascade)

insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('SUBD',   'Sistemy upravleniya bazami dannyh',                   'ISiT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT)
                       values ('BD',     'Bazy dannyh',                                        'ISiT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('INF',    'Informactonnye tekhnologii',                          'ISiT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('OAiP',  'Osnovy algoritmizacii i programmirovaniya',            'ISiT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('PZ',     'Predstavlenie znanij v ko''ternyh sistemah',       'ISiT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('PSP',    'Pogrammirovanie setevyh prilozhenij',                 'ISiT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('MSOI',     'Modelirovanie sistem obrabotki informacii',        'ISiT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('PIS',     'Proektirovanie informacionnyh sistem',              'ISiT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('KG',      'Ko''ternaya geometriya ',                           'ISiT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('PMAPL',   'Poligraficheskie mashiny, avtomaty i potochnye linii', 'POiSOI');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('KMS',     'Ko''ternye m''medijnye sistemy',               'ISiT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('OPP',     'Organizaciya poligraficheskogo proizvodstva',         'POiSOI');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,                            PULPIT)
               values ('DM',   'Diskretnaya mateatika',                     'ISiT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,                             PULPIT )
               values ('MP',   'Matematiseskoe programmirovanie',          'ISiT');  
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,                             PULPIT )
               values ('LEVM', 'Logicheskie osnovy EVM',                     'ISiT');                   
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,                             PULPIT )
               values ('OOP',  'Ob"ektno-orientirovannoe programmirovanie', 'ISiT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('EP',     'Ekonomika prirodop''vaniya',                       'MiEP');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('ET',     'Ekonomicheskaya teoriya',                               'ETiM');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('BLZiPsOO','Biologiya lesnyh zverej i ptic s osn. ohotov.',      'OV');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('OSPiLPH','Osnovy sadovoparkovogo i lesoparkovogo hozyajstva',  'LPiSPS');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('IG',     'Inzhenernaya geodeziya ',                              'LU');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('LV',    'Lesovodstvo',                                        'LZiDV');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('OH',    'Organicheskaya himiya',                                 'OH');   
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('TRI',    'Tekhnologiya rezinovyh izdelij',                      'TNHSiPPM'); 
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('VTL',    'Vodnyj transport lesa',                             'TL');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('TiOL',   'Tekhnologiya i oborudovanie lesozagotovok',           'LMiLZ'); 
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('TOPI',   'Tekhnologiya obogashcheniya poleznyh iskopaemyh ',        'TNViOHT');
insert into SUBJECT   (SUBJECT,   SUBJECT_NAME,        PULPIT )
                       values ('PEKH',    'Prikladnaya elektrohimiya',                           'HTEPiMEE');          

create table AUDITORIUM_TYPE 
(
  AUDITORIUM_TYPE   char(10) constraint AUDITORIUM_TYPE_PK  primary key,  
  AUDITORIUM_TYPENAME  VARCHAR(30) constraint AUDITORIUM_TYPENAME_NOT_NULL not null         
);

insert into AUDITORIUM_TYPE   (AUDITORIUM_TYPE,   AUDITORIUM_TYPENAME )
                       values  ('LK',   '����������');
insert into AUDITORIUM_TYPE   (AUDITORIUM_TYPE,   AUDITORIUM_TYPENAME )
                       values  ('��-�',   '������������ �����');
insert into AUDITORIUM_TYPE   (AUDITORIUM_TYPE,   AUDITORIUM_TYPENAME )
                       values  ('��-�', '���������� � ���. ������������');
insert into AUDITORIUM_TYPE   (AUDITORIUM_TYPE,   AUDITORIUM_TYPENAME )
                       values  ('��-X', '���������� �����������');
insert into AUDITORIUM_TYPE   (AUDITORIUM_TYPE,   AUDITORIUM_TYPENAME )
                       values  ('��-��', '����. ������������ �����');
---------------------------------------------------------------------------------------------------------------------
create table AUDITORIUM (
 AUDITORIUM           char(10) primary key,
 AUDITORIUM_NAME      VARCHAR(200),         
 AUDITORIUM_CAPACITY  integer,              
 AUDITORIUM_TYPE      char(10) not null,
 foreign key (AUDITORIUM_TYPE) references AUDITORIUM_TYPE(AUDITORIUM_TYPE) on delete cascade 
);

insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('206-1',   '206-1', '��-�', 15);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY)
                       values  ('301-1',   '301-1', '��-�', 15);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('236-1',   '236-1', '��',   60);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('313-1',   '313-1', '��',   60);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('324-1',   '324-1', '��',   50);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('413-1',   '413-1', '��-�', 15);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('423-1',   '423-1', '��-�', 90);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('408-2',   '408-2', '��',  90);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('103-4',   '103-4', '��',  90);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('105-4',   '105-4', '��',  90);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('107-4',   '107-4', '��',  90);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('110-4',   '110-4', '��',  30);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('111-4',   '111-4', '��',  30);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                      values  ('114-4',   '114-4', '��-�',  90 );
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values ('132-4',   '132-4', '��',   90);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values ('02�-4',   '02�-4', '��',   90);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values ('229-4',   '229-4', '��',   90);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('304-4',   '304-4','��-�', 90);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('314-4',   '314-4', '��',  90);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('320-4',   '320-4', '��',  90);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                       values  ('429-4',   '429-4', '��',  90);
insert into  AUDITORIUM   (AUDITORIUM,   AUDITORIUM_NAME, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY )
                        values  ('?',   '???', '��',  90);
-----------------------------------------------------------------------------------------------------------------------